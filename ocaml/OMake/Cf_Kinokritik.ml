(* Codeforces 250C done *)

(* you can use either gr or rdln but not both *)
let gr () = Scanf.scanf " %d" (fun i -> i);;
let rdln() = input_line stdin;;
let spli s = Str.split (Str.regexp " ") s;;
let printlisti li = List.iter (fun i -> (print_string " "; print_int i)) li;;
let printarri ai = Array.iter (fun i -> (print_string " "; print_int i)) ai;;
let debug = false;;

let rec readlist n acc = match n with
	| 0 -> acc
	| _ -> readlist (n -1) (gr() :: acc);;

let rec removedoubles l = match l with
	| [] -> []
	| h :: [] -> h :: []
	| a :: b :: t ->
			let tl = removedoubles (b :: t) in
			if a = b then tl
			else a :: tl;;

let rec countStress l cnts = match l with
	| [] -> ()
	| h :: [] -> ()
	| a :: b :: [] -> cnts.(b) <- cnts.(b) + 1
	| a :: b :: c :: t ->
			begin
				if a <> c then
					cnts.(b) <- cnts.(b) + 1
				else cnts.(b) <- cnts.(b) + 2;
				countStress (b :: c :: t) cnts
			end;;

let countStressF l cnts =
	let a = List.hd l in begin
		cnts.(a) <- cnts.(a) + 1;
		countStress l cnts
	end;;

let rec findBest cnts i k imx mx =
	if i > k then imx
	else if cnts.(i) > mx then findBest cnts (i +1) k i cnts.(i)
	else findBest cnts (i +1) k imx mx;;

let main () =
	let n = gr() in
	let k = gr() in
	let a = readlist n [] in
	let rva = List.rev a in
	begin
		if debug then begin
			print_int n;
			print_int k;
			printlisti rva
		end;
		let cnts = Array.make (k +1) 0 in
		let anodub = removedoubles rva in
		begin
			if debug then begin				
				print_string "anodub:\n";
				printlisti anodub
			end;
			countStressF anodub cnts;
			if debug then begin
				print_string "  countStress passed\n";
				printarri cnts;
				print_string "counting and print best\n"
			end;
			let best = findBest cnts 0 k 0 0 in
			print_int best
		end end;;

main();;
