open Printf;;

let tri = 
   [|[|75|];
     [|95; 64|];
     [|17; 47; 82|];
     [|18; 35; 87; 10|];
     [|20; 04; 82; 47; 65|];
     [|19; 01; 23; 75; 03; 34|];
     [|88; 02; 77; 73; 07; 63; 67|];
     [|99; 65; 04; 28; 06; 16; 70; 92|];
     [|41; 41; 26; 56; 83; 40; 80; 70; 33|];
     [|41; 48; 72; 33; 47; 32; 37; 16; 94; 29|];
     [|53; 71; 44; 65; 25; 43; 91; 52; 97; 51; 14|];
     [|70; 11; 33; 28; 77; 73; 17; 78; 39; 68; 17; 57|];
     [|91; 71; 52; 38; 17; 14; 91; 43; 58; 50; 27; 29; 48|];
     [|63; 66; 04; 68; 89; 53; 67; 30; 73; 16; 69; 87; 40; 31|];
     [|04; 62; 98; 27; 23; 09; 70; 98; 73; 93; 38; 53; 60; 04; 23|]|];;

let rec maxs i0 j0 maxi = 
  if i0 == maxi then 0
  else if i0 == (maxi-1) then tri.(i0).(j0)
  else tri.(i0).(j0) + (max (maxs (i0+1) j0 maxi) (maxs (i0+1) (j0+1) maxi));;

let rec fact n = 
  match n with
    | 0 | 1 -> 1
        | _ -> n * fact (n - 1);;

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

let affiliate a = 
  let ld = listd a 1 in
  suml ld;;

let main x =
  let sost = 220 in
  let lis = [3; 4; 1] in
  let ld = listd sost 1 in
  print_string "\n sample list "; prilist lis;
  print_string "\n now dividers list "; prilist ld;
  printf "\n affiliate %d = %d" sost (affiliate sost);
  printf "\n affiliate %d = %d" 284 (affiliate 284);
  let mi = 14 in
  print_string "\n maxs 0 0 ";
  print_int mi;
  print_string " = ";
  print_int (maxs 0 0 mi);
  print_string "\n Done\n";;

main 0;;
