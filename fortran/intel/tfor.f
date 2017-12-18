      program tfor
      integer*4 ii
      structure /SAB/
      integer aa
      integer bb
      end structure
      record /SAB/ sa
      record /SAB/sb
      sa.aa = 1111
      sa.bb = 22222
      sb.aa = -1
      sb = sa
      print *, 'sa.aa sb.aa=', sa.aa, sb.aa, sb.bb
      
      ii = 1
      goto (1000,2000) ii
      print *, 'goto dont move'
1000  continue
      print *, 'label 1000'
      goto 3000
2000  print *, 'label 2000'
3000  continue
      ii = 2
      goto (4000,5000) ii
      print *, 'goto 55 dont move'
4000  continue
      print *, 'label 4000'
      stop 77
5000  print *, 'label 5000'
      stop 99
      end
      
