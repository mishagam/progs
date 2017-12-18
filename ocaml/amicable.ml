open Printf;;

let rec listd n d = 
  match n with 
    | 1 -> [1]
    | _ ->
      begin
        if (n == d) then [1]
        else if n < d then []
        else if d == 1 then listd n 2
        else if (n mod d) == 0 then d :: listd n (d + 1)
        else listd n (d + 1)
      end;;

let prilist l = 
  List.iter (fun x -> printf " %d" x) l;;

let suml l = 
  List.fold_left (fun a b -> a + b) 0 l;;

let amicable a = 
  let ld = listd a 1 in
  suml ld;;

let is_amy a = 
  let b = amicable a in
  let ba = a < 10000 in
  let bb =  b < 10000 in
  let abeq = a == amicable b in
  (a != b) && ba && bb && abeq;;

let rec allamy n = 
  match n with 
    | 0 -> []
    | _ -> 
      if is_amy n then 
        begin
          printf "\n One amicable %d %d" n (amicable n);
          n :: allamy (n - 1)
        end
      else allamy (n - 1);; 


let main x =
  let amyl = allamy 10000 in
  let suma = suml amyl in
  printf "\n all suma 10000 = %d" suma;
  print_string "\n Done\n";;

main 0;;
