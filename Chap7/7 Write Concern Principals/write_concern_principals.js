/**
 * Created by vicky on 12/6/16.
 */

/*
*   CLuster wide commit and Write Concern:
*   ======================================
*
*   Write Concern Scenarios:
*   ========================
*
*   Write is truly ocmmited upon majority of the set.
*
*   we can get acknowledgement of this.
*
*   write is truly commited upon app @ majority of the set.
*
*   we can get acknowledgement of this.
*
*   db.getLastError({w:"majority",wtimeout:8000});
*
*
*
* */
