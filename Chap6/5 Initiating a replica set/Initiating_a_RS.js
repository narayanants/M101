/**
 * Created by vicky on 12/4/16.
 */

/*
*   Initiating a RS:
*   ================
*
*   Specify Config
*
*   Initial Data
*
*   Don't use IP addresses
*
*   don't use names from /etc/hosts
*
*   use DNS - pick an appropriate TTL
*
*
* */

    replSetInitiate

    rs.initiate()

    cfg = {
        _id:"abc",
        members:[
            {_id:0,host:"vicky@vicky-Inspiron-N5040:27001"},
            {_id:1,host:"vicky@vicky-Inspiron-N5040:27002"},
            {_id:2,host:"vicky@vicky-Inspiron-N5040:27003"}
        ]
    };

    rs.initiate(cfg);