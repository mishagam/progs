;; This buffer is for notes you don't want to save, and for Lisp evaluation.
;; If you want to create a file, visit that file with C-x C-f,
;; then enter the text in that file's own buffer.
(defun fact (n) (cond ((< n 2) 1)
		      (t (* n (fact (- n 1))))))
(fact 3)