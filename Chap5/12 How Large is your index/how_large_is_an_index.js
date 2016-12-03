/**
 * Created by vicky on 12/3/16.
 */

/*
*   Index Sizes:
*
*   Working Set:
*   ===========
*
*          Portion of out data that clients frequently access.
*          Must fit in RAM
*          Key part is indexes
*          Indexes must fit in memory
*
* */

    db.students.getIndexes();
    db.students.stats();

    totalIndexSize:2313183098;

    db.students.totalIndexSize();

