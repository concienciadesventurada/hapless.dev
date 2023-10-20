---
title: IBM SevOne Interview Prep
description: My notes for IBM SevOne Technical Support interview preparation
date: 2022-10-19
categories:
  - interview
  - tech
  - linux
  - networking
published: true
---

# Glosary

- MTU (Maximum transmission unit): its the max unit size for a packet
  transmitted to a network. The standard for Ethernet is _1500 bytes_.
  Generally, a bigger MTU means a bigger packet size and could result in more
  efficient transmission of data. Its related to

  - Prone to corruption.
  - More bloat

- inet: would stand for the IP Address

# LINUX NETWORKING

## NETSTAT

- `0.0.0.0:XX`: all 0s stands for _all public addresses_.
- `127.0.0.1`: localhost, basically.

## IP adress of an interface?

`ip addr show [interface]`: will show all the information
`ifconfig [interface]`: will show the same as the flags and it might not be
available since its legacy now

`ip [-4 || -6] addr`: will show the `inet` address

## How to check Layer 2 status of an interface?

`ip link show [interface]`: This will display L2 information

## How to check/display ARP table?

`ip neigh show`: with ip network utility
`arp -n`: In case there is no ip network utility

## How to check the router table?

`ip route [show] [interface]`:
`route`:
`netstat -r`:

## How to check open ports?

`netstat -tulpn`: Theres a lot to unpack here; - `-t`: shows TCP protocol open ports - `-u`: shows UDP protocol open ports - `-l`: shows LISTENING open ports - `-p`: shows programs that are using these ports - `-n`: shows the service name

## How to capture traffic?

The most common is to use `tcpdump`. It asks for an interface

`sudo tcpdump -i [interface] -w ./file.pcap`: - `-w`: allows you to write the captured packets to a file - `-r`: consecuently, allows you to read .pcap files

## Check CPU and RAM utilization?

The most common would be top:

Pressing 1 on the keyboard would show all cores
You can fint the RAM on the third row

## How to start services?

`service [service_name] status`: Would look like the same as `systemctl status`
`systemctl status [service_name]`: The common way nowadays.

## Linux kernel version?

`uname -a`: The classic to get all the information.
`uname -r`: Get the release version of the kernel.

## Free disk space?

`df -ah`: This will print _ALL_ the mounted partitions with all their information in a
human readable way
`df -H`: is also a viable option

## Check directory's size?

`du -sh [dir]`: Stands, very clearly for "disk usage" and it will tally the passed directory

## How to mount a USB stick?

`mount` will print all the mounted partitions.
`mount [/mnt/absolute/route/of/device]`: will mount the external media

## CURL powers

By default `curl [link/ip]` will send a GET request. However, it has many more
options:

`curl -X [METHOD] [link/ip]`: will send a HTTP request of the specified method
to a given link or IP - `-d`: will append data in the following format `param=value` - `-o [file_name]`: will save the response to a file - `-I`: will show the headers from the response - `--header "Content-Type:application/json"`: you can append a header to the
request

## Can you trace a request?

- `traceroute [link/ip]`: will print me out all the redirects that a request gets

## What is the DNS server?

- `cat /etc/resolv.conf`: this should print out the dns server it belongs to
- `resolvectl status`: the system daemon of the DNS server process

# LINUX IN GENERAL

I'll just dump all the commands I know for file management and systemctl

### Basic file management

- `cd, mkdir, rm -rf, touch, mv, cp [file] [to_file], cat`: The core and most
  basic commands for file management.

### File permissions

Using `ls -lha` will give us the

`-`: the first character is the first section of the permissions
`-rwx`: the following 3 characters

### Comparing and finding

- `cpm [file_1] [file_2]`: compares two files and if they are text prints the
  line where they differ
- `diff [file_1] [file_2]`: prints out the exact content where they differ

#### find command

- `find [dir] --name "[regex]"`: looks for a file in the given dir
- `find [dir] -type f -name ".*"`: all hidden files
- `find [dir] -type f -empty`: all empty directories
- `find [dir] -perm /a=x`: all executable files

### Process information and management

- `whereis || whatis [bin]`: both tell you where to find
- `ps -aux | grep [regex]`: It'll get the process information of given regex
- `adduser [name]`: should redirect to `passwd` command
- `pkill -f [process_name]`
- `chmod +x [file]`: makes a file executable
- `which [bin]`: which binary am I using for a certain program
- `lsblk`: lists all hard drives along with their partitions mounted
- `fdisk`: format disk tool

### Specific cases

- `xrandr`:
- `setxkbmap`:
