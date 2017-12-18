object PartSumsWs {
  println("PSMOD= " + PartSums.MOD)               //> PSMOD= 0
  PartSums.mull(5,200)                            //> java.lang.ArithmeticException: / by zero
                                                  //| 	at PartSums$.mull(PartSums.scala:5)
                                                  //| 	at PartSumsWs$$anonfun$main$1.apply$mcV$sp(PartSumsWs.scala:3)
                                                  //| 	at org.scalaide.worksheet.runtime.library.WorksheetSupport$$anonfun$$exe
                                                  //| cute$1.apply$mcV$sp(WorksheetSupport.scala:76)
                                                  //| 	at org.scalaide.worksheet.runtime.library.WorksheetSupport$.redirected(W
                                                  //| orksheetSupport.scala:65)
                                                  //| 	at org.scalaide.worksheet.runtime.library.WorksheetSupport$.$execute(Wor
                                                  //| ksheetSupport.scala:75)
                                                  //| 	at PartSumsWs$.main(PartSumsWs.scala:1)
                                                  //| 	at PartSumsWs.main(PartSumsWs.scala)
  PartSums.koefs(2,3)
}