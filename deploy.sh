#!/bin/bash
# A script to deploy the site to OU's servers by SFTP
# Note: You can upload individual files on your own to avoid re-uploading the whole site.
sftp ouok0000@ouwww.ou.edu <<SFTP_ROUTINE
put -r _site/*
bye
SFTP_ROUTINE
