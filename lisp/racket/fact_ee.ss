(define (fact n) (cond ((< n 2) 1)
                         (else (* n (fact (- n 1))))))

(define (ee n r sum) (cond ((<= r 1) sum)
                           (else (ee (+ n 1) (/ r n) (+ sum r)))))
