(* Codeforces contest 327A - perevorachivania DONE     *)
(* least one                                                               *)

open Filename;;

(* you can use either gr or rdln but not both *)
let use_input_txt = false;;
let fn = (Filename.dirname Filename.current_dir_name);;
let filename = Filename.concat "." "input.txt";;
let cin = if use_input_txt then Scanf.Scanning.open_in filename
    else Scanf.Scanning.stdin;;

let cout = open_out "output.txt";;
let gr () = Scanf.bscanf cin " %d" (fun i -> i);;
let grf () = Scanf.scanf " %f" (fun i -> i);;
let grl () = Scanf.scanf " %Ld" (fun i -> i);;
let rdln() = input_line Pervasives.stdin;;
(* let spli s = Str.split (Str.regexp " ") s;; *)
let printlisti li = List.iter (fun i -> (print_int i; print_string " ")) li;;
let printlisti64 li = List.iter (fun i -> (print_string (Int64.to_string i); print_string " ")) li;;
let printarri ai = Array.iter (fun i -> (print_int i; print_string " ")) ai;;
let rec readlist n acc = match n with | 0 -> List.rev acc | _ -> readlist (n -1) (gr() :: acc);;
let rec readpairs n acc = match n with
    | 0 -> List.rev acc
    | _ -> readpairs
                (n -1)
                (
                    let a = gr() in
                    let b = gr() in
                    (* let _ = Printf.printf "a,b = %d %d\n" a b in *)
                    (a, b) :: acc
                );;
let debug = false;;

let n = gr();;  (* number of test data *)

let rec maxoneb l mxno no = match l with
    | [] -> mxno
    | h :: t -> (
                let dn = (if h = 1 then -1 else 1) in
                let newno = no + dn in
                let newmax = if mxno > newno then mxno else newno in
                maxoneb t newmax newno);;

let rec maxonea l mxno = match l with
    | [] -> mxno
    | h :: t ->
            let ho = if h = 0 then 1 else -1 in
            let nb = maxoneb t ho ho in
                        (* let _ = Printf.printf "nb, maxno = %d %d\n" nb mxno in *)
            let newmax = if nb > mxno then nb else mxno in
            maxonea t newmax;;

let rec cntone l cnt = match l with
    | [] -> cnt
    | h :: t ->
            let d = (if h = 1 then 1 else 0) in
            cntone t (cnt + d);;

let main() =
    let la = readlist n [] in
    let mxo = maxonea la (-5) in
    let co = cntone la 0 in
    print_int (mxo + co);;

main();;
