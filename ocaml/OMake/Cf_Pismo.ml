(* Codeforces 43B done *)

open String;;

(* you can use either gr or rdln but not both *)
let gr () = Scanf.scanf " %d" (fun i -> i);;
let rdln() = input_line stdin;;
(* let spli s = Str.split (Str.regexp " ") s;; *)
let printlisti li = List.iter (fun i -> (print_string " "; print_int i)) li;;
let printarri ai = Array.iter (fun i -> (print_string " "; print_int i)) ai;;
let debug = false;;

let removec s c = 
	let idx = index s c in
	(sub s 0 idx) ^ (sub s (idx+1) ((length s) - idx - 1));;

let rec isOk a b = match b with 
| "" -> true
| _ -> 
	let c = get b 0 in
	if not (contains a c) then false
	else  
		let lenb = length b in
		let bt = sub b 1 (lenb-1) in
		if c = ' ' then isOk a bt	
		else isOk (removec a c) bt;;	

let main () =
	let a = rdln() in
	let b = rdln() in
	let ok = isOk a b in begin
		if debug then
			print_string ("A:" ^ a ^ " B:" ^ b);
	print_string (if ok then "YES" else "NO")
	end;; 

main();;
