object PartSumsWs {;import org.scalaide.worksheet.runtime.library.WorksheetSupport._; def main(args: Array[String])=$execute{;$skip(55); 
  println("PSMOD= " + PartSums.MOD);$skip(23); val res$0 = 
  PartSums.mull(5,200);System.out.println("""res0: Long = """ + $show(res$0));$skip(22); val res$1 = 
  PartSums.koefs(2,3);System.out.println("""res1: List[Long] = """ + $show(res$1))}
}