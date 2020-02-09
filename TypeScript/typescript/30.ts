class PrinterClass {
    doPrint(): void {
        console.log("doPrint() from Parent called…")
    }
}

class StringPrinter extends PrinterClass {
    doPrint(): void {
        super.doPrint()
        console.log("doPrint() is printing a string…")
    }
}

var obj = new StringPrinter()
obj.doPrint()