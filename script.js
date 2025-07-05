{\rtf1\ansi\ansicpg1252\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const columnInput = document.getElementById('columnInput');\
const csvOutput = document.getElementById('csvOutput');\
\
columnInput.addEventListener('input', () => \{\
  const lines = columnInput.value.split('\\n').filter(line => line.trim() !== '');\
  csvOutput.value = lines.join(', ');\
\});\
\
function copyCSV() \{\
  csvOutput.select();\
  document.execCommand('copy');\
  alert('CSV copied to clipboard!');\
\}\
\
function clearFields() \{\
  columnInput.value = '';\
  csvOutput.value = '';\
\}\
\
function downloadCSV() \{\
  const csvContent = csvOutput.value;\
  const blob = new Blob([csvContent], \{ type: 'text/csv;charset=utf-8;' \});\
  const url = URL.createObjectURL(blob);\
\
  const link = document.createElement("a");\
  link.setAttribute("href", url);\
  link.setAttribute("download", "output.csv");\
  link.style.display = "none";\
  document.body.appendChild(link);\
  link.click();\
  document.body.removeChild(link);\
\}\
}