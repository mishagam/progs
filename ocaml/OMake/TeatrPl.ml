let main () =
  let gr () = Scanf.scanf " %f" (fun i -> i) in 
  let n = gr () in
  let m = gr () in
  let a = gr () in
  let f x y = ceil (x /. y) in
  Printf.printf "%.0f\n" ((f n a) *. (f m a))
  ;;
let _ = main();;
