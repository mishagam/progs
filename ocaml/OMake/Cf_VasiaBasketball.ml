(* Codeforces 493C VasiaBasketball done *)

open List;;
open String;;
open Array;;
open Int64;;

let gr () = Scanf.scanf " %d" (fun i -> i);;
let grf () = Scanf.scanf " %f" (fun i -> i);;
let grl () = Scanf.scanf " %Ld" (fun i -> i);;
let rdln() = input_line Pervasives.stdin;;
(* let spli s = Str.split (Str.regexp " ") s;; *)
let printlisti li = List.iter (fun i -> (print_int i; print_string " ")) li;;
let printarri ai = Array.iter (fun i -> (print_int i; print_string " ")) ai;;
let printarri64 ai = Array.iter (fun i -> (print_string (Int64.to_string i); print_string " ")) ai;;

let rec readlist n acc = match n with
	| 0 -> acc
	| _ -> readlist (n - 1) (gr() :: acc);;

let mcomp a b = a-b;;

(* count elements less than d using binary search *)
let rec countd a i0 i1 d = 
	if i1 = i0+1 then 
		begin
			(*printarri a;
			print_string " d = "; print_int d; 
			print_string " i0 = "; print_int i0; 
			print_string " i1 = "; print_int i1; 
			print_string " cnt = ";*)
			let cnt = 2*i1 + 3*((length a)-i1) + (if a.(i0)>d then 1 else 0) in
			  cnt
		end
	else
		let i = (i0 + i1)/2 in
		if a.(i)>d then countd a i0 i d
		else countd a i i1 d;; 

let diff aa bb d = 
	let da = countd aa 0 (length aa) d in
	let db = countd bb 0 (length bb) d in
	(da, db,d);;

let mprcomp pra prb = 
	let (a0,a1,d) = pra in
	let (b0,b1,d) = prb in
	let da = a0-a1 in
	let db = b0-b1 in
	if da-db != 0 then db - da
	else  b0 - a0;;

let main () = 
	let n = gr () in
	let a = readlist n [] in
	let aa = Array.of_list (List.sort mcomp a) in
	let m = gr() in
	let b = readlist m [] in
	let bb = Array.of_list (List.sort mcomp b) in
	let ab = (0 :: (a @ b)) in 
	let abpr = List.map (fun d -> diff aa bb d) ab in
	let abprso = List.sort mprcomp abpr in
	let (x,y,d) = List.hd abprso in
	begin
	  print_int x;
		print_string ":";
		print_int y;
		(*print_string " d= "; print_int d*)
	end;;

main();;
