(* examples from OCaml manual                                              *)
(* http://caml.inria.fr/pub/docs/manual-ocaml-4.00/manual003.html          *)

(* #load "dynlink.cma";; #load "camlp4o.cma";; *)
open Genlex;;

type expr =
      Const of int
    | Sum of expr * expr    (* e1 + e2 *)
    | Diff of expr * expr    (* e1 - e2 *)
  ;;

let rec eval exp =
    match exp with
      Const c -> c
    | Sum(f, g) -> eval f + eval g
    | Diff(f, g) -> eval f - eval g;;

let rec print_expr exp =
      match exp with
        Const c -> print_int c
      | Sum(f, g) ->
          print_expr f;
          print_string " + "; 
          print_expr g
      | Diff(f, g) ->
          print_expr f;
          print_string " - "; 
          print_expr g;;

let lexer = make_lexer ["+"; "-"];;
let token_stream = lexer(Stream.of_string "1 + 21 - 21");;

let rec parse_expr = parser
      [< e1 = parse_int; e = parse_more_adds e1 >] -> e
  and parse_more_adds e1 = parser
      [< 'Kwd "+"; e2 = parse_int; e = parse_more_adds (Sum(e1, e2)) >] -> e
    | [< 'Kwd "-"; e2 = parse_int; e = parse_more_adds (Diff(e1, e2)) >] -> e
    | [< >] -> e1
  and parse_int = parser
    | [< 'Int i >] -> Const  i;;

let parse_expression = parser [< e = parse_expr; _ = Stream.empty >] -> e;;
print_string "goint to parse first expression\n";;
let te = parse_expression token_stream;;
print_expr te;;
print_string ("  value = " ^ (string_of_int (eval te)) ^ "\n");;

let read_expression s = parse_expression(lexer(Stream.of_string s));;
let ee = read_expression "13 - 2 - 1 + 7";;
print_expr ee;;
let expval = eval ee;;
print_newline();;
print_string ("value = " ^ (string_of_int expval) ^ "\n");;
