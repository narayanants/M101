/*
    Replication Options:
    ====================

    aribiterOnly: true
    priority: <num>
    hidden: <boolean>
    slaveDelay: <secs>
    votes: <num>


    Aribiters:
    =========

        aribiterOnly:true

    
    Priority Options:
    =================

        priority: <num> => default(1) => If 9 Never Primary


    Hidden and SlaveDelay:
    ======================

        hidden: <boolean>
        slaveDelay: <time> 8 * 3600

        Member must lag never be fresher than primary

    Voting Options:
    ===============

        votes: <num>

        Never use Votes

    Applied Reconfig:
    ================

    var cfg = {
        _id:'abc',
        members:[
            {_id:0,host:localhost:27017},
            {_id:1,host:localhost:27018},
            {_id:2,host:localhost:27019},
        ]
    }

    var cfg = rs.conf()

    cfg.members[2].slaveDelay = true;

    rs.reconfig(cfg);

    cfg.members[2].hidden = true;

    cfg.members[2].priority = 0;

    rs.reconfig(cfg);

    // Node down

    cfg = rs.conf()

    cfg.members[2].slaveDelay = 8 * 3600

    rs.reconfig(cfg);
    rs.isMaster();


    Write Concern Principals:
    ========================

    w:majority

    Threshold Limits on RS:
    ======================

        rs size: 50 members
        Voting members: 7


 */
