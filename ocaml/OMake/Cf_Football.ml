(* Codeforces 248C done Football Robot Electronic *)

open Big_int;;
open List;;

(* you can use either gr or rdln but not both *)
let gr () = Scanf.scanf " %d" (fun i -> i);;
let grf () = Scanf.scanf " %f" (fun i -> i);;
let grl () = Scanf.scanf " %Ld" (fun i -> i);;
let rdln() = input_line stdin;;
(* let spli s = Str.split (Str.regexp " ") s;; *)
let printlisti li = List.iter (fun i -> (print_int i; print_string " ")) li;;
let printarri ai = Array.iter (fun i -> (print_int i; print_string " ")) ai;;
let debug = false;;

let main () =
	let y1 = grf() in
	let y2 = grf() in
	let yw = grf() in
	let xb = grf() in
	let yb = grf() in
	let r = grf() in
	begin
		if debug then begin
  		print_string "y1,y2,yw,xb,yb,r=";
  		print_float y1; print_string " ";
  		print_float y2; print_string " ";
  		print_float yw; print_string " ";
  		print_float xb; print_string " ";
  		print_float yb; print_string " ";
  		print_float r; print_string " done print input\n"
		end;
	let targ = (y2 +. y1) *. 0.5 in
	let dy2 = yw -. r -. yb in 
	let dy1 = yw -. r -. r -. y1 in
	let dy = dy1 +. dy2 in
	let al = atan (xb /. dy) in
	let xw = xb *. dy1 /. dy in 
	let halfg = y2 -. y1 -. r in
	let rr = halfg *. (sin al) in
	begin
		if debug then begin
  		print_string "targ dy2 dy1 dy al xw halfg rr =";
  		print_float targ; print_string " ";
  		print_float dy2; print_string " ";
  		print_float dy1; print_string " ";
  		print_float dy; print_string " ";
  		print_float al; print_string " ";
  		print_float xw; print_string " ";
  		print_float halfg; print_string " ";
  		print_float rr; print_string " done print vars\n"
		end;
	let retv = 
		(if rr < r then -1.0
		 else if rr > r *. 1.01 then xw -. 0.0001
		 else xw)
		in
	print_float retv
	end end;; 	
	
main();;
