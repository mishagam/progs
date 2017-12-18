import objsets._

object TweetsWs {import scala.runtime.WorksheetSupport._; def main(args: Array[String])=$execute{;$skip(60); 
    val set1 = new Empty;System.out.println("""set1  : objsets.Empty = """ + $show(set1 ));$skip(42); 
    val ta = new Tweet("a", "a body", 20);System.out.println("""ta  : objsets.Tweet = """ + $show(ta ));$skip(29); 
    val set2 = set1.incl(ta);System.out.println("""set2  : objsets.TweetSet = """ + $show(set2 ));$skip(55); 
    val set3 = set2.incl(new Tweet("b", "b body", 20));System.out.println("""set3  : objsets.TweetSet = """ + $show(set3 ));$skip(40); 
    val c = new Tweet("c", "c body", 7);System.out.println("""c  : objsets.Tweet = """ + $show(c ));$skip(40); 
    val d = new Tweet("d", "d body", 9);System.out.println("""d  : objsets.Tweet = """ + $show(d ));$skip(29); 
    val set4c = set3.incl(c);System.out.println("""set4c  : objsets.TweetSet = """ + $show(set4c ));$skip(29); 
    val set4d = set3.incl(d);System.out.println("""set4d  : objsets.TweetSet = """ + $show(set4d ));$skip(29); 
    val set5 = set4c.incl(d);System.out.println("""set5  : objsets.TweetSet = """ + $show(set5 ));$skip(92); 
 
  def size(set: TweetSet): Int = {
    if (set.isEmpty) 0
    else 1 + size(set.tail)
  };System.out.println("""size: (set: objsets.TweetSet)Int""");$skip(45); 
  def twa(tw:Tweet):Boolean = tw.user == "a";System.out.println("""twa: (tw: objsets.Tweet)Boolean""");$skip(42); val res$0 = 
  size(set1.filter(tw => tw.user == "a"));System.out.println("""res0: Int = """ + $show(res$0));$skip(47); 
  val fil5 = set1.filter(tw => tw.user == "a");System.out.println("""fil5  : objsets.TweetSet = """ + $show(fil5 ));$skip(19); val res$1 = 
  set2.filter(twa);System.out.println("""res1: objsets.TweetSet = """ + $show(res$1));$skip(31); val res$2 = 
  set2.filter0(twa, new Empty);System.out.println("""res2: objsets.TweetSet = """ + $show(res$2));$skip(13); val res$3 = 
  size(fil5);System.out.println("""res3: Int = """ + $show(res$3));$skip(21); val res$4 = 
  set4c.union(set4d);System.out.println("""res4: objsets.TweetSet = """ + $show(res$4))}
}