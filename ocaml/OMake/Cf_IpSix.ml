(* Codeforces 250B done *)

(* you can use either gr or rdln but not both *)
let gr () = Scanf.scanf " %d" (fun i -> i);; 
let rdln() = input_line stdin;;
let spli s = Str.split (Str.regexp " ") s;;

let rec fill0 s =
	if String.length s >= 4 then s
	else fill0 ("0" ^ s);;

let rec repeat0 n = match n with
	| 0 -> "0000"
	| _ -> "0000:" ^ repeat0 (n -1);;

let doTerm s ndiff = match s with
	| "Z" -> repeat0 ndiff
	| _ -> fill0 s;;

let rec priList ls sep = match ls with
	| [] -> "!!!ERROR!!!"
	| h :: [] -> h
	| h :: t -> h ^ sep ^ priList t sep;;

let main () =
	let sn = rdln() in
	let n = int_of_string sn in
	begin
		for i = 0 to (n-1) do
			let s = rdln() in
			let sz = Str.global_replace (Str.regexp "::") ":Z:" s in
			let ss = Str.split (Str.regexp ":") sz in
			let diff = 8 - List.length ss in
			let ssm = List.map (fun x -> doTerm x diff) ss in
			let prs = priList ssm ":" in
			print_string (prs ^ "\n")
		done
	end;;

main();;
