package mis.games.rendzu.client;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import mis.games.rendzu.RGame;
import mis.games.rendzu.RMove;
import mis.games.server.OneRGame;
import mis.games.utils.MisLog;

/**
 * Class for communicating with rendzu server.
 * 
 * @author Misha
 * @version 1.0
 */
public class RendzuClient {
    RGame game = null;
    String serverUrl = null;
    // OneRGame ogame = null;
    /** have Ok communications with server */
    boolean connected = false;
    static RendzuClient instance = null;
    
    public static synchronized RendzuClient getInstance(RGame game, String serverUrl) {
        if (instance == null) {
            instance = new RendzuClient(game, serverUrl);
            return instance;
        }
        if (serverUrl != null) {
            instance.serverUrl = serverUrl;
        }
        if (game != null) {
            instance.setGame(game);
        }
        return instance;
    }
    
    private RendzuClient(RGame game, String serverUrl) {
        if (serverUrl == null || serverUrl.trim().equals("")) {
            throw new IllegalArgumentException(
                    "serverUrl cannot be null or empty");
        }
        this.serverUrl = serverUrl;
        if (game != null) {
            this.setGame(game);
        }
    }
    
    String getServerResponse(String requestUrl) {
        BufferedReader in = null;
        String resp = null;
        try {
            URL url = new URL(requestUrl);
            in = new BufferedReader(
                        new InputStreamReader(
                        url.openStream()));
    
            StringBuilder html = new StringBuilder();
            String inputLine;
    
            while ((inputLine = in.readLine()) != null) {
                html.append(inputLine).append("\r\n");
            }
            resp = html.toString();
        } catch (IOException e) {
            MisLog.e("getServerResponse() failed: " + e);
        } finally {
            if (in != null) {
                try {
                    in.close();
                } catch (IOException e) {
                    MisLog.e("in.close() failed: " + e);
                }
            }
        }
        MisLog.d("getServerResponse("+requestUrl+"), server response: " + resp);
        return resp;
    }
    
    public void reportNewGame() {
        String cmd = serverUrl + "?cmd=new_game&gameid=" + game.getId();
        cmd += "&side=" + game.getSide();
        String resp = getServerResponse(cmd);
        connected = resp.startsWith("Ok:");        
        MisLog.i("reportNewGame(), server response: " + resp);
    }
    
    public void reportMove(RMove move) {
        String cmd = serverUrl + "?cmd=report_move&gameid=" + game.getId();
        cmd += "&move=" + move.toString();
        cmd += "&game_hash=" + game.getHash();  // hash before move
        // game.addMove(move);
        String resp = getServerResponse(cmd);
        connected = resp.startsWith("Ok:");   
        MisLog.d("reportedMove, server response: " + resp);
    }
    
    public void reportUndoMove() {
        String cmd = serverUrl + "?cmd=undo_move&gameid=" + game.getId();
        cmd += "&game_hash=" + game.getHash();  // hash before move
        String resp = getServerResponse(cmd);
        connected = resp.startsWith("Ok:");   
        MisLog.d("reportUndoMove, server response: " + resp);
    }
    
    public Map<String, String> urlUnpack(String sall) {
        Map<String, String> parms = new HashMap<String, String>();
        String []sparts = sall.split("&");
        for (String part : sparts) {
            String []skeyval = part.split("=");
            String key = skeyval[0];
            String val = skeyval[1];
            parms.put(key, val);
        }
        return parms;
    }
    
    public List<RMove> getLastMoves() {
        int first = game.getNumberMoves();
        String cmd = serverUrl + "?cmd=get_last_moves&gameid=" + game.getId();
        cmd += "&game_hash=" + game.getHash();  // hash before move
        cmd += "&first=" + first;  // hash before move
        String resp = getServerResponse(cmd);
        List<RMove> moves = new ArrayList<RMove>();
        if (resp.startsWith("Ok:")) {
            String []ss = resp.split(" ");
            String []sml = ss[1].trim().split(",");
            for (String smove : sml) {
                if (smove.equals("")) {
                    continue;
                }
                RMove m = new RMove(smove);
                game.addMove(m);
                moves.add(m);
            }
        }
        connected = resp.startsWith("Ok:");   
        MisLog.i("getLastMoves, server response: " + resp);
        return moves;
    }
    
    public String[] getGamesIds() {
        String cmd = serverUrl + "?cmd=games_list"; 
        MisLog.i("RendzuClient.getGamesIds() called, cmd: " + cmd);
        String resp = getServerResponse(cmd);
        String []ret = new String[0];
        if (resp != null && resp.startsWith("Ok:")) {
            String []ss = resp.split(" ");
            MisLog.d("RendzuClient.getGamesIds() resp split on " + ss.length + " parts");
            if (ss.length > 1) {
                int ns = ss.length - 1;
                ret = new String[ns];
                MisLog.d("RendzuClient.getGamesIds() ret length = " + ret.length);
                for (int i=0; i<ns; i++) {
                    ret[i] = ss[i+1];
                }
            }
        }
        MisLog.i("getGamesIds, number returned ids = " + ret.length);
        return ret;
    }

    public boolean isConnected() {
        return connected;
    }
//
//    public OneRGame getOgame() {
//        return ogame;
//    }
//
//    public void setOgame(OneRGame ogame) {
//        this.ogame = ogame;
//    }

    public RGame getGame() {
        return game;
    }

    public void setGame(RGame game) {
        this.game = game;
        if (game != null) {
            this.game = game;
            String id = game.getId();
            // this.ogame = new OneRGame(id, game.getSide());
        }
    }

}
