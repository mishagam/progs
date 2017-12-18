open Printf;;
open Str;;

let input_file = "C:\\Misha\\programs\\Functional\\OCaml\\TestOca\\data\\problem.in";;
let output_file = "C:\\Misha\\programs\\Functional\\OCaml\\TestOca\\data\\problem.out";;


let remove_end s = String.sub s 0 ((String.length s) - 1);;

let read_ints ic = 
  let line = input_line ic in
  let lls = split (regexp "[ \t]+") line in begin
    List.map (fun x -> int_of_string x) lls
  end;;

let one_case ic oc = 
  let line = input_line ic in 
  let n = int_of_string line in 
  if n == 0 then false
  else begin
    let line1 = input_line ic in
    let ne = int_of_string line1 in begin 
      printf "  n line ne =  %d |%s| %d\n" n line1 ne;
      for i = 1 to ne do
        let ll = read_ints ic in        
        printf "hd, nxt: %d %d\n" (List.hd ll) (List.nth ll 1)
      done;        
      true
    end 
  end;;

let main p = 
  printf "Start\n";
  let ic = open_in input_file in
  let oc = open_out output_file in 
  while one_case ic oc do
    printf "One more case\n"
  done;
  close_out oc;
  close_in ic;  
  printf "\nDone\n";;

main 0;;