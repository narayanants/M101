/* 
    Replication in MongoDB:
    ----------------------

    * Redundant copies of data across multiple machines.
    
    Replication:
    -----------
        * High Availability (Failover)
        * Data Safety (Durability)
        * Extra copies
        * Disaster Recovery

        1 Primary => Multiple secondaries

        Read from Primary/secondaries

    * Replication is Asynchronous
    * Statement Based Replication
    * 1 Primary => Multiple Secondaries

    Replication Commands
    =====================

    mongod --port 27017 --dbpath /var/lib/mongod/1 --replSet abc --logpath /var/lib/mongod/1.log --logappend --oplogSize 50 --fork


    mongod --port 27018 --dbpath /var/lib/mongod/2 --replSet abc --logpath /var/lib/mongod/2.log --logappend --oplogSize 50 --fork


    mongod --port 27019 --dbpath /var/lib/mongod/3 --replSet abc --logpath /var/lib/mongod/3.log --logappend --oplogSize 50 --fork

    Initiating the replSet:
    ======================

    var cfg = {
        _id:"abc",
        members:[
            {_id:0,host:"vicky@vicky-Inspiron-N5040:27001"},
            {_id:1,host:"vicky@vicky-Inspiron-N5040:27002"},
            {_id:2,host:"vicky@vicky-Inspiron-N5040:27003"}
        ]
    };

    rs.initiate(cfg);

    Best Practices for host:
    ========================

        No IP addresses
        No /etc/hosts
        use DNS

        When initiate is made, that time Mongod's create their oplog's

        local.ns => special reserved db for MongoDB

        Replica Set Status:
        ===================

        rs.status()

        db.system.replset.find().pretty()

        db.isMaster()

        Replica Set commands:
        ====================

        rs.conf();
        rs.freeze(secs)
        rs.stepDown(secs)
        rs.syncFrom(host:port)
        rs.slaveOk()


        to make secondaries read ok  => rs.slaveOk()


        Shutting down mongod:
        ======================

        kill PID => kill 427

        Force kill => kill -9 427


        Read Preference:
        ===============

        Default from Primary.

        Read Preference Options:
        =======================

        Primary (Default)
        Primary Preferred
        Secondary
        Secondary Preferred
        Nearest






        
*/