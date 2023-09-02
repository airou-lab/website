#!/bin/bash
# A script to deploy the site to OU's servers by SFTP
sftp ouok0000@ouwww.ou.edu <<SFTP_ROUTINE
DriveVehicles7
put *.html
put *.css
put -r people/
put -r news/
put -r publications/
put -r research/
put -r images/
bye
SFTP_ROUTINE
