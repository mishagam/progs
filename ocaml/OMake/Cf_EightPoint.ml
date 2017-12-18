(* Codeforces contest 334B - eight poiint sets Done    *)
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

let m8 = Array.make_matrix 3 3 0;;

let rec unique last sls = match sls with (* find unique elements in sorted list *)
	| [] -> []
	| h :: t -> if (h == last) then unique last t
			else h :: (unique h t);;

let rec get_su l =
	let sortl = List.sort compare l in
	let uni = unique (-1) sortl in
	uni;;

let get_idx x a =
	if x == a.(0) then 0
	else if x == a.(1) then 1
	else if x == a.(2) then 2
	else -999;;

let rec setm8 aa bb pl = match pl with
	| [] -> ()
	| (a, b) :: t -> (
				let ia = get_idx a aa in
				let ib = get_idx b bb in
				if 0<=ia && ia<=2 && 0<=ib && ib<=2 
				then m8.(ia).(ib) <- (m8.(ia).(ib) + 1);
				setm8 aa bb t
			);;

let checkm8 () =
	(
		let rok = ref true in
		(
			for i = 0 to 2 do
				for j = 0 to 2 do
					if (i =1) && (j =1) then
						rok := !rok && (m8.(i).(j) = 0)
					else
						rok := !rok && (m8.(i).(j) = 1)
				done
			done
		);
		!rok
	);;

let main() =
	let prs = readpairs 8 [] in
	let al = get_su (List.map (fun (a, b) -> a) prs) in
	let bl = get_su (List.map (fun (a, b) -> b) prs) in
	let aa = Array.of_list al in
	let bb = Array.of_list bl in
	let _ = setm8 aa bb prs in
	(
		if checkm8() then	print_string "respectable"
		else print_string "ugly";
		print_newline ()
	);;

main();;
