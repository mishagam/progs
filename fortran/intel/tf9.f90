      program tfor
      integer*4 ii
      integer*4 aa

! small test of free format and continuation line
  aa = 999 + &
       1
  print *, 'aa= ', aa
      ii = 1
      goto (1000,2000) ii
      print *, 'goto dont move'
1000  continue
      print *, 'label 1000'
      goto 3000
2000  print *, 'label 2000'
3000  continue
      ii = 55
      goto (4000,5000) ii
      print *, 'goto 55 dont move'
4000  continue
      print *, 'label 4000'
      stop
5000  print *, 'label 5000'
      stop
      end
      
