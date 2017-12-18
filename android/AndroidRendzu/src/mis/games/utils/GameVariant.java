package mis.games.utils;

public enum GameVariant {
    EASY, HARD, AIAI, MANMAN, OBSERVE, PASSIVE;
    
    public static PlayerEnum myPlayer(GameVariant v) {
        PlayerEnum player;
        switch (v) {
        case EASY:
        case HARD:
        case MANMAN:
        case PASSIVE:
            player = PlayerEnum.MAN;
            break;
            
        case AIAI:
            player = PlayerEnum.EASY;
            
        case OBSERVE:
            player = PlayerEnum.REMOTE;
            break;
            
        default:
            throw new IllegalStateException("Illegal variant in myPlayer");            
        }        
        return player;        
    }
    
    public static PlayerEnum otherPlayer(GameVariant v) {
        PlayerEnum player;
        switch (v) {
        case EASY:
            player = PlayerEnum.EASY;
            break;

        case HARD:
        case AIAI:
            player = PlayerEnum.HARD;
            break;
            
        case MANMAN:            
        case OBSERVE:
            player = PlayerEnum.REMOTE;
            break;

        case PASSIVE:
            player = PlayerEnum.MAN;
            break;

        default:
            throw new IllegalStateException("Illegal variant in myPlayer");            
        }        
        return player;        
    }
    

}
