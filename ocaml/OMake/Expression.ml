(* examples from OCaml manual                                              *)
(* http://caml.inria.fr/pub/docs/manual-ocaml-4.00/manual003.html          *)

(* #load "dynlink.cma";; #load "camlp4o.cma";; *)
open Genlex;;

type expression =
      Const of float
    | Var of string
    | Sum of expression * expression    (* e1 + e2 *)
    | Diff of expression * expression   (* e1 - e2 *)
    | Prod of expression * expression   (* e1 * e2 *)
    | Quot of expression * expression   (* e1 / e2 *)
  ;;

exception Unbound_variable of string;;

let rec eval env exp =
    match exp with
      Const c -> c
    | Var v -> (try List.assoc v env with Not_found -> raise(Unbound_variable v))
    | Sum(f, g) -> eval env f +. eval env g
    | Diff(f, g) -> eval env f -. eval env g
    | Prod(f, g) -> eval env f *. eval env g
    | Quot(f, g) -> eval env f /. eval env g;;

let rec deriv exp dv =
    match exp with
      Const c -> Const 0.0
    | Var v -> if v = dv then Const 1.0 else Const 0.0
    | Sum(f, g) -> Sum(deriv f dv, deriv g dv)
    | Diff(f, g) -> Diff(deriv f dv, deriv g dv)
    | Prod(f, g) -> Sum(Prod(f, deriv g dv), Prod(deriv f dv, g))
    | Quot(f, g) -> Quot(Diff(Prod(deriv f dv, g), Prod(f, deriv g dv)),
                         Prod(g, g))
  ;;

let print_expr exp =
		(* Local function definitions *)
    let open_paren prec op_prec =
      if prec > op_prec then print_string "(" in
    let close_paren prec op_prec =
      if prec > op_prec then print_string ")" in
    let rec print prec exp =     (* prec is the current precedence *)
      match exp with
        Const c -> print_float c
      | Var v -> print_string v
      | Sum(f, g) ->
          open_paren prec 0;
          print 0 f; print_string " + "; print 0 g;
          close_paren prec 0
      | Diff(f, g) ->
          open_paren prec 0;
          print 0 f; print_string " - "; print 1 g;
          close_paren prec 0
      | Prod(f, g) ->
          open_paren prec 2;
          print 2 f; print_string " * "; print 2 g;
          close_paren prec 2
      | Quot(f, g) ->
          open_paren prec 2;
          print 2 f; print_string " / "; print 3 g;
          close_paren prec 2
    in print 0 exp;;

let rec pri_rev_poland e =
	match e with
	| Const c -> print_string " "; print_float c
	| Var v -> print_string " "; print_string v
	| Sum(f, g) ->
			pri_rev_poland f;
			pri_rev_poland g;
			print_string " +"
	| Diff(f, g) ->
			pri_rev_poland f;
			pri_rev_poland g;
			print_string " -"
	| Prod(f, g) ->
			pri_rev_poland f;
			pri_rev_poland g;
			print_string " *"
	| Quot(f, g) ->
			pri_rev_poland f;
			pri_rev_poland g;
			print_string " /";;

let lexer = make_lexer ["("; ")"; "+"; "-"; "*"; "/"];;
let token_stream = lexer(Stream.of_string "1.0 +x");;

let rec parse_expr = parser
      [< e1 = parse_mult; e = parse_more_adds e1 >] -> e
  and parse_more_adds e1 = parser
      [< 'Kwd "+"; e2 = parse_mult; e = parse_more_adds (Sum(e1, e2)) >] -> e
    | [< 'Kwd "-"; e2 = parse_mult; e = parse_more_adds (Diff(e1, e2)) >] -> e
    | [< >] -> e1
  and parse_mult = parser
      [< e1 = parse_simple; e = parse_more_mults e1 >] -> e
  and parse_more_mults e1 = parser
      [< 'Kwd "*"; e2 = parse_simple; e = parse_more_mults (Prod(e1, e2)) >] -> e
    | [< 'Kwd "/"; e2 = parse_simple; e = parse_more_mults (Quot(e1, e2)) >] -> e
    | [< >] -> e1
  and parse_simple = parser
      [< 'Ident s >] -> Var s
    | [< 'Int i >] -> Const(float i)
    | [< 'Float f >] -> Const f
    | [< 'Kwd "("; e = parse_expr; 'Kwd ")" >] -> e;;

let parse_expression = parser [< e = parse_expr; _ = Stream.empty >] -> e;;
let read_expression s = parse_expression(lexer(Stream.of_string s));;
let ee = read_expression "2*(x+y)";;
print_expr ee;;
print_newline();;

let sexp = "2*(x+y)/(3*z + z- 12*h)" in
let ee = read_expression sexp in 
begin
print_string ("reverse poland of " ^ sexp ^ "\nis: ");
pri_rev_poland ee
end;;