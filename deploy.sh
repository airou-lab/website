#!/bin/bash
# A script to deploy the site to OU's servers by SFTP
# Note: You can upload individual files on your own to avoid re-uploading the whole site.
sftp ouok0000@ouwww.ou.edu <<SFTP_ROUTINE
rm *
put *.html
put *.css
put -r team/
put -r news/
put -r publications/
put -r research/
put -r images/
bye
SFTP_ROUTINE
