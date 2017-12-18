(* TouristGuide program from Programming Challenges, April 16 2010, Done *)
open Printf;;
open Str;;

let input_file = "C:\\Misha\\programs\\Functional\\OCaml\\TestOca\\data\\tourist_guide.in";;
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

(* changes capacities in m. returns list of reached cities *)
let rec add_cap ma m capa mal = 
  match mal with
    | [] -> []
    | h :: t ->
      let fromCity, toCity, capb = h in
      let toCap = if capb < m.(fromCity) then capb else m.(fromCity) in
      if toCap <= m.(toCity) then add_cap ma m capa t
      else begin
        m.(toCity) <- toCap;
        printf "set m (%d) to %d\n" toCity toCap;
        toCity :: add_cap ma m capa t
      end;;     

let rec max_pass ma m (ll : int list) = 
  match ll with
    | [] -> ()
    | lll ->
      let full = List.map (fun x -> add_cap ma m m.(x) ma.(x)) lll in
      let flatl = List.concat full in
      let nll = clean_list flatl in
      max_pass ma m nll;;

let one_task ic oc = (* do one task from lis *)
  let lr = (read_ints ic) in
  let n, m = List.hd lr, List.nth lr 1 in
  let ma = Array.make (n + 1) [] in 
    begin
      if n != 0 then begin
        printf " n m = %d %d\n" n m;
        for i = 0 to m-1 do
          let ll = read_ints ic in 
          let a, b, cap = (List.hd ll, List.nth ll 1, List.nth ll 2) in begin
            printf " read row: %d %d %d\n" a b cap;
            ma.(a) <- (a, b, cap)  :: ma.(a)
          end
        done;
        printf " read capacities data\n";
        let m = Array.make (n + 1) 0 in
          let ll = read_ints ic in 
          let from, toc, group_size = (List.hd ll, List.nth ll 1, List.nth ll 2) in begin
            printf "starting max_pass, from, toc, gsize = %d %d %d\n"
               from toc group_size;
            m.(from) <- 1000000;
            max_pass ma m [from];
            fprintf oc "%d\n" m.(toc);  
            printf "cap, group_size, ngroups = %d %d %d\n" 
              m.(toc) group_size ((group_size / (m.(toc) - 1)) + 1)  
        end;
        true
      end 
      else false
    end;;

let main a =
  printf "Hello from Tourist Guide\n";
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