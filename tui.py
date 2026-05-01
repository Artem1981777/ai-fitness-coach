from rich.console import Console
from rich.table import Table
from rich.panel import Panel
from rich.live import Live
import time

console = Console()

def generate_status():
    table = Table(title="[bold cyan]Iron Coach AI Agent Status[/bold cyan]")
    table.add_column("System", style="cyan")
    table.add_column("Status", style="green")
    table.add_column("Latency", style="magenta")

    table.add_row("Llama-3.1 Engine", "ONLINE", "142ms")
    table.add_row("Cloudflare KV", "CONNECTED", "89ms")
    table.add_row("Telegram Webhook", "ACTIVE", "210ms")
    return table

console.print(Panel.fit(
    "[bold green]IRON TERMINAL COACH v1.0[/bold green]\n"
    "[white]Mobile-First AI Fitness Infrastructure[/white]",
    border_style="bold green"
))

with Live(generate_status(), refresh_per_second=4):
    time.sleep(2)
    console.log("[yellow][*][/yellow] Agent initialized. Monitoring user requests...")
    time.sleep(1)
    console.log("[green][+][/green] New request from @Artem: 'Generate leg day plan'")
    time.sleep(1)
    console.log("[blue][i][/blue] AI Logic: Processing via Llama-3.1...")
    time.sleep(2)
    console.log("[bold green]Success:[/bold green] Workout plan pushed to Telegram.")
