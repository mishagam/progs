(* Codeforces 246B done *)

let gr () = Scanf.scanf " %d" (fun i -> i)
let rec readline n li = match n with
	| 0 -> li
	| _ -> readline (n-1) (gr () :: li);;

let rec sum l = match l with
	| [] -> 0
	| h :: t -> h + (sum t);;

let main () =
	let n = gr () in
	let ll = readline n [] in
	let sm = sum ll in
	let ret = if (sm mod n) = 0 then n else n -1 in
	(* print_string "sm: ";   *)
	(* print_int sm;          *)
	(* print_string " ret: "; *)
	print_int ret;;

main();;
