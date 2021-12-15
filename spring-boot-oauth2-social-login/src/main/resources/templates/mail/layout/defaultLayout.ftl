<#macro myLayout>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
 <style>
 .card {
 	position: relative;
 	display: block;
 	-webkit-box-orient: vertical;
 	-webkit-box-direction: normal;
 	min-width: 0;
 	word-wrap: break-word;
 	background-color: #fff;
 	background-clip: border-box;
 	border: 1px solid rgba(0, 0, 0, .125);
 	border-radius: .25rem
 }
 
 .card-body {
 	-webkit-box-flex: 1;
 	-ms-flex: 1 1 auto;
 	flex: 1 1 auto;
 	padding: 0 1.25rem 0 1.25rem
 }
 .card-header {
  	-webkit-box-flex: 1;
 	-ms-flex: 1 1 auto;
 	flex: 1 1 auto;
	padding: .25rem 1.25rem;
	margin-bottom: 0;
	background-color: rgba(0, 0, 0, .03);
	border-bottom: 1px solid rgba(0, 0, 0, .125)
}

 .media {
 	display: -webkit-box;
 	display: -ms-flexbox;
 	display: flex;
 	-webkit-box-align: start;
 	-ms-flex-align: start;
 	align-items: flex-start
 }
 
 .media-body {
 	-webkit-box-flex: 1;
 	-ms-flex: 1;
 	flex: 1
 }
 
 .rounded-circle {
 	border-radius: 50% !important
 }
 
 .pagelink-dark {
 	cursor: pointer;
 	color: #343a40 !important;
    text-decoration: none;
 }
 
 .pagelink-dark:hover {
 	text-shadow: 1px 1px 2px #343a40;
 	text-decoration: none;
 }
 </style>
 
</head>
    <body style="width:100%;height:100%">
      <table cellspacing="0" cellpadding="0" style="width:100%;height:100%">
        <tr>
          <td colspan="2" align="center">
            <#include "header.ftl"/>
          </td>
        </tr>
        <tr>
          <td>
            <#nested/>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <#include "footer.ftl"/>
          </td>
        </tr>
      </table>
    </body>
  </html>
</#macro>