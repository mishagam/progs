open Printf;;

let rec list_primes n nmax erat (pl : int list) = 
  if n >= nmax then pl
  else if n > 1 && erat.(n) > 0 then begin
      for i = 2 to (nmax / n) + 1 do
        let idx = i * n in
        if idx < nmax then
          erat.(idx) <- 0
      done;
      list_primes (n + 1) nmax erat (n :: pl)
  end 
  else  
      list_primes (n+1) nmax erat pl;;

let rec divizors n lp ld = 
  match (n, lp) with 
    | (nn, []) -> nn :: ld 
    | (1, ll) -> []
    | (nn, h :: t) ->
      if h*h > nn then nn :: ld 
      else if (nn mod h) != 0 then divizors nn t ld
      else divizors (nn / h) (h :: t) (h :: ld);;

let sqrt_ceil i = int_of_float (sqrt (float_of_int i));;

let listprimes aa = 
  printf "list primes started\n";
  let nmax = int_of_float (sqrt (float_of_int aa)) + 1000 in
  let erat = Array.make nmax 1 in 
  let ll = List.rev (list_primes 0 nmax erat []) in begin
    printf "nmax = %d , Total primes %d\n" nmax (List.length ll);
    let ii = aa in
    let ldiv = divizors ii ll [] in begin
      printf "\ndivizors of %d\n" ii;
      List.iter (fun x -> printf " %d" x) ldiv
    end
  end;
  printf "\nList primes done\n";;

let main () = 
  listprimes 1702980;;

main ();;
      
      
