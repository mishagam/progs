(* Codeforces 260D BlackWhiteTree works *)

open String;;
open Array;;

let gr () = Scanf.scanf " %d" (fun i -> i);;
let grf () = Scanf.scanf " %f" (fun i -> i);;
let grl () = Scanf.scanf " %Ld" (fun i -> i);;
let rdln() = input_line Pervasives.stdin;;
(* let spli s = Str.split (Str.regexp " ") s;; *)
let printlisti li = List.iter (fun i -> (print_int i; print_string " ")) li;;
let printarri ai = Array.iter (fun i -> (print_int i; print_string " ")) ai;;
let debug = false;;

let rec readlist n acc = match n with
	| 0 -> List.rev acc
	| _ -> readlist (n -1) (gr() :: acc);;

let rec readprs idx n acc = match n with
	| 0 -> List.rev acc
	| _ -> let c = gr() in
			let v = gr() in
			readprs (idx +1) (n -1) ((c, v, idx) :: acc);;

let rec split1 li la lb = match li with
	| [] -> (la, lb)
	| h :: t ->
			let (c, _, _) = h in
			match c with
			| 0 -> split1 t (h :: la) lb
			| 1 -> split1 t la (h :: lb);;

let sortfun a b =
	let (ca, va, ia) = a in
	let (cb, vb, ib) = b in
	(va - vb);;

let rec combine la lb acc = match la with
	| [] -> acc
	| ha :: ta -> match lb with
			| [] -> acc
			| hb :: tb ->
					let (_, va, ia) = ha in
					let (_, vb, ib) = hb in
					if va <= vb then
						combine ta ((1, (vb - va), ib) :: tb) ((ia, ib, va) :: acc)
					else
						combine ((0, (va - vb), ia) :: ta) tb ((ia, ib, vb) :: acc);;

let rec pricomb co =
	let (ia, ib, w) = co in
	begin
		print_int ia; print_string " ";
		print_int ib; print_string " ";
		print_int w;
		print_newline()
	end;;

let n = gr();;

let main () =
	let prs = readprs 1 n [] in
	let (ula, ulb) = split1 prs [] [] in
	let la = List.sort sortfun ula in
	let lb = List.sort sortfun ulb in
	let comb = combine la lb [] in
	List.iter pricomb comb;;

main();;
