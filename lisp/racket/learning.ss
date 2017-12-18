(define (p) (p))

(define (test x y)
  (if (= x 0)
      0
      y))

(define (squares s) (if (null? s) ()
                        (cons (* (car s) (car s))
                              (squares (cdr s)))))

(define (substitute a) 
  (cond ((eqv? a 'i) 'you)
        ((eqv? a 'me) 'you)
        ((eqv? a 'you) 'me)
        (#t a)))

(define (substitutei a) 
  (cond ((eqv? a 'i) 'you)
        ((eqv? a 'me) 'you)
        ((eqv? a 'you) 'i)
        (#t a)))

(define (switchme s) 
  (if (null? s) ()
      (cons (substitute (car s)) (switch (cdr s)))))

(define (switch s) 
  (if (null? s) ()
      (cons (substitutei (car s)) (switchme (cdr s)))))

(define (maxsq a b c)
  (cond ((and (<= a b) (<= a c)) (+ (* b b) (* c c)))
        ((and (<= b a) (<= b c)) (+ (* a a) (* c c)))
        ((and (<= c a) (<= c b)) (+ (* a a) (* b b)))))

(define (contains a s) 
  (if (null? s) #f
      (if (eqv? a (car s)) #t
          (contains a (cdr s)))))

(define (dupls-removed s) 
  (if (null? s) s 
  (if (contains (car s) (cdr s)) (dupls-removed (cdr s))
      (cons (car s) (dupls-removed (cdr s))))))

(define (ssq s) (map (lambda (x) (* x x)) s))




      
