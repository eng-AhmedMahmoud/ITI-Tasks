<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:fo="http://www.w3.org/1999/XSL/Format">

<xsl:template match="CATALOG">

<table border="2">
	<tbody>
		<tr style="background-color:Olive">
			<th>Title</th>
			<th>Artist</th>
		</tr>
		<xsl:for-each select="CD">
					<tr>
						<td><xsl:value-of select="TITLE"/></td>
						<xsl:choose>
							<xsl:when test="PRICE &gt; 10">
							<td style="background-color:red"><xsl:value-of select="ARTIST"/></td>
							</xsl:when>
							<xsl:otherwise> 
							<td style="background-color:green"><xsl:value-of select="ARTIST"/></td>
							</xsl:otherwise>
						</xsl:choose>
					</tr>
		</xsl:for-each>
	</tbody>
</table>
</xsl:template>


</xsl:stylesheet>
