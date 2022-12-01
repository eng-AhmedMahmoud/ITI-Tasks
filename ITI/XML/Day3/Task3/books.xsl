<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:fo="http://www.w3.org/1999/XSL/Format">

<xsl:template match="books">

        <xsl:text>Review 3.5 Count is </xsl:text>
		<xsl:value-of select="count(book[review= '3.5'])"/>
		<xsl:element name="br"/>
		<xsl:text>Review 4 Count is </xsl:text>
        <xsl:value-of select="count(book[review= '4'])"/>
</xsl:template>

</xsl:stylesheet>
