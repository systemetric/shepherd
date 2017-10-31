from setuptools import setup

setup(
    name="shepherd",
    version="0.1",
    packages=["shepherd"],

    install_requires=[
        "Flask",
        "enum34 ; python_version < '3.4'",
        "pytz",
    ],

    author="Josh Holland",
    author_email="anowlcalledjosh@gmail.com",
)
