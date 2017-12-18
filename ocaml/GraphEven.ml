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


let rec clean_list ll = 
  match ll with
    | [] -> []
    | h :: t -> 
      if List.mem h t then clean_list t
      else h :: clean_list t;;

let rec check_one ma m n ll ln = 
  match ll with
    | [] -> 
      if ln = [] then true
      else check_one ma m (n+1) (clean_list ln) []
    | h :: t -> 
      if m.(h) <= 0 then begin
        m.(h) <- (n+1);
        check_one ma m n t (ma.(h) @ ln)
      end 
      else if ((m.(h) mod 2) != ((n+1) mod 2)) then false
      else true;;

let one_task ic oc = (* do one task from lis *)   
  let n = List.hd (read_ints ic) in
  let ma = Array.make n [] in 
    begin
      printf " n = %d\n" n;
      if n != 0 then begin
        let m = List.hd (read_ints ic) in
        for i = 1 to m do
          let ll = read_ints ic in 
          let i, j = (List.hd ll, List.nth ll 1) in
          ma.(i) <- j :: ma.(i)
        done;
        let bret = ref true in begin
          for i = 0 to n - 1 do
            let mm = Array.make n (- 1)  in begin
              mm.(i) <- 0;
              if not (check_one ma mm 0 [i] []) then
                bret := false
            end 
          done;
          fprintf oc "%s\n" (if !bret then "BICOLORABLE" else "NOT BICOLORABLE");  
          printf "%s\n" (if !bret then "BICOLORABLE" else "NOT BICOLORABLE")  
        end;
        true
      end 
      else false
    end;;

let main a =
  printf "Hello from GraphEven\n";
  let ic = open_in input_file in
  let oc = open_out output_file in 
  begin
    printf "Files Opened\n";
    while one_task ic oc do
      ()
    done;
    close_out oc;
    close_in ic  
  end;
  printf "\nDone\n";;

main 0;;