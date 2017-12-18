(* Codeforces contest 318A - Even Odds DONE *)

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

let two = Int64.succ Int64.one;;

let n = grl();;  (* number of data in a *)
let k = grl();;  (* number of commands *)

let num pl = 
   let nodd = (Int64.div (Int64.succ n) two) in
   (* let _ = Printf.printf " nodd = %Ld\n" nodd in *)
   if pl <= nodd then Int64.pred (Int64.add pl pl) 
   else 
   let o = Int64.sub pl nodd in
   Int64.mul two o;;

let main () =
    let nm = num k in
    print_string (Int64.to_string nm);;	

main();;
