      program testSize

      structure /Tstruct/
      real*4 rr
      integer ia(10)
      end structure
      type (TStruct) tts

      record /TStruct/ trec
      print *, 'Test sizeof(Tstruct) = ', sizeof(TStruct)
      print *, 'Test sizeof(trec) = ', sizeof(trec)
      stop
      end
