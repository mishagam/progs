(* Courtesy of pango on #ocaml *)

let bailout = 16.
let max_iterations = 1000

let mandelbrot x y =
  let cr = y -. 0.5 in
  let ci = x in
  let zi = ref 0.0 in
  let zr = ref 0.0 in
  let i = ref 0 in
  let continue = ref true in
  let result = ref 0 in
  while !continue do
    incr i;
    let temp = !zr *. !zi in
    let zr2 = !zr *. !zr in
    let zi2 = !zi *. !zi in
    zr := zr2 -. zi2 +. cr;
    zi := temp +. temp +. ci;
    if zi2 +. zr2 > bailout then begin
      result := !i;
      continue := false;
    end
    else if !i > max_iterations then
      continue := false;
  done;
  !result

let () =
  let start_time = Unix.gettimeofday () in
  for y = -39 to 38 do
    print_newline ();
    for x = -39 to 38 do
      let i = mandelbrot (float x /. 40.) (float y /. 40.) in
      print_char (if i = 0 then '*' else ' ');
    done
  done;
  print_newline ();
  let stop_time = Unix.gettimeofday () in
  let query_time = stop_time -. start_time in
  Printf.printf "OCaml Elapsed %0.2f\n" query_time
