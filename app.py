from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/proyectos-electricos")
def proyectos_electricos():
    return render_template("proyectos-electricos.html")

@app.route("/domotica")
def domotica():
    return render_template("domotica.html")

@app.route("/seguridad-electronica")
def seguridad_electronica():
    return render_template("seguridad-electronica.html")

@app.route("/mantenimiento-medico")
def mantenimiento_medico():
    return render_template("mantenimiento-medico.html")

if __name__ == "__main__":
    app.run(debug=True)
