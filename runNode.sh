#!/bin/bash

cd /media/disk1/piWeb

COMMAND="node test.js >> /media/disk1/logs/piNode.log 2>&1 "
$COMMAND &
