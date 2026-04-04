import os
import requests

LOGOS = {
    "python": "https://cdn.simpleicons.org/python",
    "r": "https://cdn.simpleicons.org/r",
    "javascript": "https://cdn.simpleicons.org/javascript",
    "numpy": "https://cdn.simpleicons.org/numpy",
    "pandas": "https://cdn.simpleicons.org/pandas",
    "scikitlearn": "https://cdn.simpleicons.org/scikitlearn",
    "scipy": "https://cdn.simpleicons.org/scipy",
    "matplotlib": "https://cdn.simpleicons.org/matplotlib",
    "seaborn": "https://cdn.simpleicons.org/seaborn",
    "docker": "https://cdn.simpleicons.org/docker",
    "postgresql": "https://cdn.simpleicons.org/postgresql",
    "microsoftazure": "https://cdn.simpleicons.org/microsoftazure",
    "sql_mysql_generic": "https://cdn.simpleicons.org/mysql",
    "jupyter": "https://cdn.simpleicons.org/jupyter",
    "apachehadoop": "https://cdn.simpleicons.org/apachehadoop",
    "html5": "https://cdn.simpleicons.org/html5",
    "css3": "https://cdn.simpleicons.org/css3",
    "gephi": "https://cdn.simpleicons.org/gephi",
}

OUTPUT_DIR = "public/images/techStackLogos"


def main() -> None:
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    namesDownloaded = os.listdir(OUTPUT_DIR)
    notDownloaded = []

    for name, url in LOGOS.items():
        
        if f"{name}.svg" not in namesDownloaded:
            try:
                response = requests.get(url, timeout=20)
                response.raise_for_status()

                file_path = os.path.join(OUTPUT_DIR, f"{name}.svg")
                with open(file_path, "wb") as f:
                    f.write(response.content)

                print(f"[OK] {name} descargado en {file_path}")
            except requests.RequestException as e:
                print(f"[ERROR] No se pudo descargar {name}: {e}")
                notDownloaded.append(name)
        else:
            print(f"{name}.svg already downloaded")

    print("Not downloaded logos: ", notDownloaded)

if __name__ == "__main__":
    main()