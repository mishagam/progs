type 'a btree = Empty | Node of 'a * 'a btree * 'a btree;;

let rec member x btree = 
  match btree with 
	| Empty -> false
	| Node (y, left, right) ->
		if x = y then true 
		else if x < y then member x left
		else member x right;;
		
let rec insert x btree = 
  match btree with 
	| Empty -> Node (x, Empty, Empty)
	| Node (y, left, right) ->
		if x <= y then Node (y, insert x left, right)
		else Node (y, left, insert x right);;

let rec print_tree t = match t with
| Empty -> print_string " "
| Node (x, left, right) -> begin
	print_string "[";
	print_tree left;
	print_int x;
	print_tree right;
	print_string "]"
	end;;

let l0 = Empty in
let l1 = insert 4 (insert 2 l0) in
let l2 = insert 1 (insert 3 l1) in
let l3 = insert (-1) (insert 0 l2) in
print_tree l3;;
 
		