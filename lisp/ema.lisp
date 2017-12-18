(+ 23 44)
'(this is a quoted list)
(setq aa 456)
(+ 22 aa)
(+ 2 (+ 3 3))
(concat "abc" "def")
(substring "The quick brown fox jumped." 16 19)
(message "This message appears in the echo area!")
(setq carnivores '(lion tiger leopard))
(current-buffer)
(defun mfact (n) 
  (cond ((< n 2) 1) 
	(t (* n (mfact (- n 1))))))
(mfact 5)
(= (> 2 3) '())
(= 7 nil)





