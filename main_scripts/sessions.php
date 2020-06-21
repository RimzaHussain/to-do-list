<?php
session_start();

function isEverythingOkay()
{
    if (isset($_SESSION['logged']) && isset($_SESSION['id'])) {
        return true;
    } else {
        return false;
    }
}