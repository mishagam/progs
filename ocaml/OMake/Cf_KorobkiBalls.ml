(* Codeforces 260C KorobkiBalls Done *)

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
	| 0 -> List.rev acc
	| _ -> readlist (n -1) (gr() :: acc);;

let rec readarray i n ar =
	if i < n then begin
		ar.(i) <- (Int64.of_int (gr())); 
		readarray (i +1) n ar
	end;;

let debug = false;;

let n = gr();;
let last = gr();;
let an = Array.make n Int64.zero;;

let rec step i cnt =
	if an.(i) = Int64.zero then an.(i) <- cnt
	else begin
		an.(i) <- Int64.pred an.(i);
		let ii = if i =0 then n -1 else i -1 in
		step ii (Int64.succ cnt)
	end;;

let rec find_min i mn = 
	if i = n then mn
	else let mini = if an.(i) < mn then an.(i) else mn in
	find_min (i+1) mini;;

let rec substract_min i mn = 
	if i = n then ()
	else begin
		an.(i) <- Int64.sub an.(i) mn;
		substract_min (i+1) mn
  end;;

let main () = begin
		readarray 0 n an;
(*		print_int n; print_string " ";
		print_int last; print_string " ";*)
		let mini = Int64.pred (find_min 0 an.(0)) in
		begin
		  substract_min 0 mini;
			let cnt = Int64.mul (Int64.of_int n) mini in
			step (last -1) cnt
		end;
		printarri64 an;
		print_newline()
	end;;

main();;
